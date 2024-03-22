<script setup>
</script>

<template>
<div class="flex justify-center items-center max-w-[970px]  bg-white mt-10">
	<div class="container mx-auto my-4 px-4 lg:px-20">

		<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			<div class="flex">
				<h1 class="font-bold uppercase text-3xl text-neutral-600">Stuur ons een bericht</h1>
			</div>
			<div class="flex flex-col gap-5  mt-5">
				<input class="w-full bg-gray-100  text-neutral-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Naam en Achternaam*" />
				<input  class="w-full bg-gray-100 text-neutral-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Vul uw bedrijfsnaam in als u een bedrijf bent*" />
               
				<input   class="w-full bg-gray-100 text-neutral-600 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
			
        </div>
				<div class="my-4">
					<textarea   placeholder="Bericht*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div class="my-2 ">
					<button  type="submit" class="uppercase text-sm font-bold tracking-wide bg-green-200  text-neutral-600 p-3 rounded-lg w-full border-b-4 border-r-2 border-t-4 border-l-2 border-purple-300 active:border-0 
                      focus:outline-none focus:shadow-outline">
           versturen 
          </button>
				</div>
			</div>

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-green-200 rounded-2xl flex flex-col">
				<div class="flex flex-col  text-neutral-600 ">
					<h1 class="font-bold uppercase text-4xl  text-purple-600">AI</h1>
                    <h2 class="font-bold uppercase text-2xl ">Connect</h2>
                    <br>
                    <br>
					<p class="text-gray-400">Streven we binnen drie dagen te reageren.
					</p>

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<!-- <i class="fas fa-map-marker-alt pt-2 pr-2" /> -->
            </div>
            
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <!-- <i class="fas fa-phone-alt pt-2 pr-2" /> -->
            </div>
           
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2 gap-4">
            <a href="https://github.com/db-voor-u/portfolio" target="_blank" rel="noreferrer" class="mx-1 ">
              <Icon name="uil:github" class="h-8 w-8 mx-auto  " />
            </a>
            <a href="#" target="_blank" rel="noreferrer" class="mx-1 ">
              <Icon name="uil:linkedin" class="h-8 w-8 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
</div>

<!-- kan een pizza voor me kopen -->
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <!-- <div>
    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
      <img class="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"/>
    </a>
  </div> -->
</div>


</template>