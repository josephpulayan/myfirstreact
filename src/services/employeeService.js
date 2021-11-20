/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import httpclient from "../commons/httpclient"
const getEmployees = ()=>{
   return httpclient.get('/employees');
}
export default {getEmployees}