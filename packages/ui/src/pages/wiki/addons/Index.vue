<template>
  <div class="info-page-content">
    <WikiBreadCrumbs />
    <h1>{{ $t('wiki.addonsTitle') }}</h1>
    <div>
      <LocalizedTextWrapper keypath="wiki.addonsInfo" />
    </div>
    <div class="addons-container">
      <router-link class="addon" :to="{ name: 'lady_of_lake' }">
        <h2>{{ $t('addons.ladyOfLake') }}</h2>
        <img class="addon-image" :src="getImagePathByID('features', 'lady_of_lake')" alt="lady" />
      </router-link>
      <router-link class="addon" :to="{ name: 'excalibur' }">
        <h2>{{ $t('addons.excalibur') }}</h2>
        <img class="addon-image" :src="getImagePathByID('features', 'excalibur')" alt="excalibur" />
      </router-link>
      <router-link class="addon" :to="{ name: 'lady_of_sea' }">
        <h2>{{ $t('addons.ladyOfSea') }}</h2>
        <img class="addon-image" :src="getImagePathByID('features', 'lady_of_sea')" alt="ladyOfSea" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WikiBreadCrumbs from '@/components/header/WikiBreadCrumbs.vue';
import { getImagePathByID } from '@/helpers/images';

export default defineComponent({
  components: {
    WikiBreadCrumbs,
  },
  data() {
    return {
      getImagePathByID,
    };
  },
});
</script>

<style scoped lang="scss">
@import '@/styles/info-page.scss';

.addons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  h2 {
    text-align: center;
  }
}

.addon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 210px;
  max-width: 40%;
}

.addon-image {
  width: 67%;
  border: 2px solid black;
}
</style>
