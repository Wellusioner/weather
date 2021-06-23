import buildUrl from 'build-url';
import config from '../config';

const queryBuilder = (url='', params={}) => {
  let query = {};

  if(config.API_KEY){
    query['appid'] = config.API_KEY;
  }

  if(Object.keys(params).length){
    for(let key in params){
      query[key] = params[key]
    }
  }


  return buildUrl({
    path: url,
    queryParams: query
  })
}

export default queryBuilder;