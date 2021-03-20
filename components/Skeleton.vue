<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <div class="bg-gray-700" style="width: 320px; height: 180px;" />
      <p class="mt-2 bg-gray-700" style="width: 320px; height: 16px;" />
      <p class="mt-2 bg-gray-700" style="width: 160px; height: 14px;" />
      <p class="mt-2 mb-4 bg-gray-700" style="width: 160px; height: 14px;" />
    </div>
    <!-- モバイル -->
    <div v-else>
      <div class="bg-gray-700" style="width: 375px; height: 210px;" />
      <p class="mt-3 bg-gray-700 mx-2" style="width: 359px; height: 14px;" />
      <p class="mt-2 bg-gray-700 ml-2" style="width: 160px; height: 12px;" />
      <p class="mt-2 mb-4 bg-gray-700 ml-2" style="width: 160px; height: 12px;" />
    </div>
  </section>
</template>
