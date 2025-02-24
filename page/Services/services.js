import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://epnrntxvjzgfpzegeiaw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwbnJudHh2anpnZnB6ZWdlaWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MzAyODEsImV4cCI6MjA1MjQwNjI4MX0.YnLoe56FS26aJfqpv0J1d7TNIdyBIpp8_UwFyfsTPjw';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', () => {
  async function fetchAndDisplayCards() {
    try {
      // Fetch all data
      const { data, error } = await supabase.from('hkrealestates').select('*');

      if (error) {
        throw error;
      }

      const buyContainer = document.getElementById('Buy-cards-container');
      const rentContainer = document.getElementById('Rent-cards-container');

      if (!buyContainer || !rentContainer) {
        console.error("Couldn't find one or both card containers!");
        return;
      }
      buyContainer.innerHTML = '';
      rentContainer.innerHTML = '';

      data.forEach((item) => {
        const card = `
          <div class="max-w-md w-[100%] mx-auto bg-[#DDC7BB] rounded-2xl shadow-lg">
              <img
                src="${item.img}"
                alt="${item.name}"
                class="w-full rounded-t-2xl"
              />
              <div class="mt-1 p-4">
                <div class="text-gray-800 font-bold text-lg flex w-full mb-5">
                  <img
                    src="../../public/images/location.png"
                    class="w-5 h-5 mr-2 mt-1"
                    alt="Location"
                  />${item.city}, ${item.area}
                </div>
                <div class="mt-3 text-gray-600 flex items-center space-x-8 mb-5">
                  <div class="flex items-center text-[#2B1B12] font-semibold">
                    <img
                      class="bg-white rounded-md mr-2 p-[1.5px]"
                      src="../../public/images/rooms.png"
                      alt="Rooms"
                    />${item.rooms} Rooms 
                  </div>
                  <div class="flex items-center text-[#2B1B12] font-semibold">
                    <img
                      class="bg-white rounded-md mr-2 p-[1.5px]"
                      src="../../public/images/size.png"
                      alt="Size"
                    />${item.size} sq ft 
                  </div>
                </div>
                <div class="mt-4 flex items-center justify-between">
                  <button class="bg-[#2B1B12] text-white px-4 py-2 rounded-lg">
                    <a href="../ContactUs/contact.html">Contact</a>
                  </button>
                  <div class="text-[#2B1B12] font-semibold text-xl">$${item.price}</div>
                </div>
              </div>
          </div>
        `;

    
        if (item.offer == 'buy') {
          buyContainer.innerHTML += card;
        } else if (item.offer == 'rent') {
          rentContainer.innerHTML += card;
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error.message || error);
    }
  }

  fetchAndDisplayCards();
});
