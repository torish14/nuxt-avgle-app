<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <div class="bg-gray-800" style="width: 320px; height: 180px;" />
      <p class="mt-2 bg-gray-800" style="width: 320px; height: 16px;" />
      <p class="mt-2 bg-gray-800" style="width: 120px; height: 14px;" />
      <p class="mt-2 mb-4 bg-gray-800" style="width: 160px; height: 14px;" />
    </div>
    <!-- モバイル -->
    <div v-else>
      <div class="bg-gray-800" style="width: 370px; height: 180px;" />
      <p class="mt-2 bg-gray-800 pl-2" style="width: 370px; height: 16px;" />
      <p class="mt-2 bg-gray-800 pl-2" style="width: 120px; height: 14px;" />
      <p class="mt-2 mb-4 bg-gray-800 pl-2" style="width: 160px; height: 14px;" />
    </div>
  </section>
</template>
