import {limit} from './helperFunctions'
import {skip} from './helperFunctions'

export default async ($content, params, error) => {

  
    const currentPage = parseInt(params.page) || 1;
  
    const perPage = 10;
  
    const allUsers = await $content('users').fetch();
  
    const totalUsers = Object.values(allUsers).filter(e => e.user_id).length;
  
    // use Math.ceil to round up to the nearest whole number
    const lastPage = Math.ceil(totalUsers / perPage);
  
    // use the % (modulus) operator to get a whole remainder
    const lastPageCount = totalUsers % perPage;
  
    const skipNumber = () => {
      if (currentPage === 1) {
        return 0;
      }
      if (currentPage === lastPage) {
        return totalUsers - lastPageCount;
      }
      return (currentPage - 1) * perPage;
    };

  
    const paginatedUsers = await $content('users').fetch()
      

      
  
    if (currentPage === 0 || !Object.values(paginatedUsers).filter(e => e.user_id).length) {
      return error({ statusCode: 404, message: 'No Users found!' });
    }
  
    return {
      updatedAllUsers: Object.values(allUsers).filter(e => e.user_id),
      updatedPaginatedUsers :  Object.values(allUsers).filter(e => e.user_id).skip(skipNumber()).limit(perPage),
    };
  };
  