<template>
    <div class="w-2/3 p-4 rounded-lg shadow right-card" style="background-color:#171717; border: 3px solid #222121;">
                  
        <div class=" p-6 w-full flex flex-col text-white h-[90%] border-7 rounded-bl-lg rounded-br-lg" >
            <div class="flex-1 overflow-auto">
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="text-start p-2 text-xl">User</th>
                    <th class="text-start p-2 text-xl relative cursor-pointer flex items-center">
                      Total Wagered
                      <span class="dropdown-icon"></span>
                    </th>
                    <th class="text-start p-2 text-xl">Commission Earned</th>
                    <th class="text-start p-2 text-xl">Status</th>
                   
                  </tr>
                </thead>
              
                  <tbody >
                    <tr class="hover:bg-gray-700 border-bottom" style="background-color: #222121; cursor:pointer; border-bottom: 10px solid #171717;">
                      <td class="text-start p-2 text-lg flex items-center">
                        <img src="@/assets/Ellipse 120user.svg" alt="" class="mr-2"> <!-- Add margin-right to separate image and text -->
                        <span>Quintice420</span>
                      </td>
                      <td class="text-start p-2 text-lg">$3242.21</td>
                      <td class="text-start p-2 text-lg">$15.12</td>
                      <td class="text-start p-2 text-lg">Inactive</td>
                     
                      
                    </tr>
          
                    <tr @click="openBanModal" class="hover:bg-gray-700 border-bottom" style="background-color: #222121; cursor:pointer;">
                      <td class="text-start p-2 text-lg flex items-center">
                        <img src="@/assets/Ellipse 120user.svg" alt="" class="mr-2"> <!-- Add margin-right to separate image and text -->
                        <span>Gooner187420</span>
                      </td>
                      <td class="text-start p-2 text-lg">$532.53</td>
                      <td class="text-start p-2 text-lg">$2.32</td>
                      <td class="text-start p-2 text-lg">Active</td>
                     
                      
                    </tr>
                    
                  </tbody>
                
              </table>
            </div>
          
           
          </div>
    
 
  </div>
</template>

<script>

export default {
 
  methods: {
    toggleChat() {
      this.isChatVisible = !this.isChatVisible
    },
    
  async makeTransaction() {
    try {
      // Prepare transaction data
      const transactionData = {
        amount: 100,  // Example transaction amount
        userId: this.$store.state.user.id,
      };

      // Send transaction request to backend using axios
      const response = await axios.post('https://your-backend-api/transaction', transactionData);

      console.log('Transaction successful', response.data);

      // Handle success (e.g., update UI, show confirmation message)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show error message to user)
    }
  },
 

  }
}
</script>

<style scoped>
.main-card{
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 30px;
  padding-bottom: 20px;
}
.right-card{
  margin-top: 33px;
  margin-bottom: 16px;
}


</style>
