import axios from 'axios';

export default {
    allEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=20&nat=us')
    },

    seeFemales: function(){
        return axios.get('https://randomuser.me/api/?gender=female&results=20&nat=us')
    },

    seeMales: function(){
        return axios.get('https://randomuser.me/api/?gender=male&results=20&nat=us')
    },

}