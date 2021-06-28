import { useState, useEffect} from 'react';
import { config, queryBuilder } from 'src/services';
import PropTypes from 'prop-types';

const Schema = ({ url, params, children }) => {
  const [isFetched, setFetched] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = queryBuilder(url, params);
    let controller = new AbortController();
    
    (async () => {
      try{
        setFetched(false);
        const res = await fetch(config.API_ROOT + query, { signal: controller.signal});
        const result = await res.json();
        setData(result);
        setError(null);
        setFetched(true);
      }
      catch(err){
        setError(err);
        setFetched(true);
      }       
    })();

    return () => {
      controller.abort();
    }
  }, [url, location, params]);

  return children({
    isFetched,
    data,
    error
  });
}

Schema.defaultProps = {
  url: '',
  params: {},
  children: () => {}
}

Schema.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired
}

export default Schema;
