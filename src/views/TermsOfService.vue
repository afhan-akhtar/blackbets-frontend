<template>
    <LoginTopBar />
    <div class="flex h-screen">
      <!-- Chat Section -->
      <div
        :class="[
          'transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-2/11' : 'w-0',
          isChatVisible ? 'block' : 'hidden',
          'bg-gray-800 text-white overflow-hidden'
        ]"
      >
        <div class="p-6" style="height:calc(100vh - 100px); overflow-y:auto;">
          <Chat />
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div
        :class="[
          'flex-grow transition-all duration-300 ease-in-out',
          isChatVisible ? 'w-0' : 'w-full'
        ]"
        class="bg-black p-6" style="height:calc(100vh - 80px); overflow-y:auto;"
      >
      <button @click="goBack" class="bg-[#222121] py-1 px-2 rounded-md">
        <img src="@/assets/arrow-left.svg" alt="">
      </button>
        <!-- Header -->
        <div class="flex justify-between items-center text-white mb-2">
          <h1 class="text-2xl">Terms of Service</h1>
        </div>
  
        <!-- Terms of Service Content -->
        <div class="p-6 rounded-lg shadow-lg text-white" style="background-color: #171717; border: 3px solid #222121;">
          <!-- Introduction -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Introduction</h2>
            <p>Welcome to Blackbets. By accessing or using our website, you agree to be bound by these Terms of Service (the "TOS"). If you don't agree with any part of these TOS, you must not use our services.</p>
          </div>
  
          <!-- Eligibility -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Eligibility</h2>
            <p>
              1. Age Requirement: You must be at least 18 years old or the legal age of majority in your jurisdiction to use our services.<br />
              2. Legal Compliance: You are responsible for ensuring that your use of the Site complies with all applicable laws and regulations in your jurisdiction.
            </p>
          </div>
  
          <!-- Use of Services -->
<div class="mb-6">
    <h2 class="text-lg font-bold mb-2">Use of Services</h2>
    <p>
      1. Prohibited Activities: You agree not to engage in activities that:
    </p>
    <ul class="list-disc pl-6">
        <li>Violate any laws and regulations.</li>
      <li>Infringe on the rights of others.</li>
      <li>Disrupt or interfere with the Site's operations or security.</li>
    </ul>
    <p>
      2. Gambling Responsibility: You acknowledge that gambling involves risk and that you may lose money. You agree to gamble responsibility for your gambling losses.
    </p>
  </div>
  
  
          <!-- Deposits and Withdrawals -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Deposits and Withdrawals</h2>
            <p>
              1. Deposits: All deposits must be made in accordance with the instructions provided on the site. We reserve the right to refuse any deposit at our discretion.<br />
              2. Withdrawals: Withdrawals are subject to our verification procedures and may be delayed or denied if we suspect fraudulent activity.
            </p>
          </div>
  
          <!-- Changes to the Terms of Service -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Changes to the Terms of Service</h2>
            <p>
              1. Modifications: We reserve the right to modify these TOS at any time. We will notify you of any material changes by posting the new TOS on the site. Your continued use of the Site after such changes constitutes your acceptance of the new TOS.
             
            </p>
          </div>
  
          <!-- Staff Powers -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Staff Powers</h2>
            <p>
              1. Decision-Making Authority: Our staff has the authority to make independent decisions regarding user accounts and activities on the Site. This includes but is not limited to, decisions about account suspensions, terminations, and the resolution of disputes.<br />
              2. Discretionary Powers: Staff members have the discretion to take actions they deem necessary to maintain the integrity and security of the Site, including banning users who violate these TOS or engage in fraudulent activities.
            </p>
          </div>
  
          <!-- Dispute Resolution -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Dispute Resolution</h2>
            <p>1. Contact Us: If you have any disputes or concerns regarding of our services, please contact our customer support team in the discord.</p>
          </div>
  
          <!-- Limitation of Liability -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Limitation of Liability</h2>
            <p>
              1. No Liability: We are not liable for any direct , indirect, incidental, or consequential damages arising out of your use of the Site or services.<br />
              2. No Warranty: Our services are provided 'as is' without any warranties of any kind, express or implied.<br/>
              3. For any questions or concerns regarding these TOS, please <a href="mailto:blackbets@proton.me" class="text-blue-500 underline" style="color: #4042BA;">blackbets@proton.me</a> or in the discord
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chat from "../components/common/Chat.vue";
  import LoginTopBar from "../components/common/LoginTopBar.vue";
  
  export default {
    components: {
      Chat,
      LoginTopBar,
    },
    data() {
      return {
        isChatVisible: true,
      };
    },
    methods: {
      toggleChat() {
        this.isChatVisible = !this.isChatVisible;
      },
      goBack() {
      this.$router.go(-1);
    },

    },
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #171717;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    height: 150px;
    transition: opacity 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative; /* For absolute positioning of images */
  }
  
  .card img {
    width: 64px; /* Width of the images */
    height: 64px; /* Height of the images */
    position: absolute;
    top: 8px;
    right: 8px;
  }
  
  .card-link:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
  </style>
  