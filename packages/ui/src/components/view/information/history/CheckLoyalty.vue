<template>
  <div>
    <span
      v-html="
        $t('checkLoyalty.checkInfo', {
          ladyOwner: calculateNameByID(data.validatorID),
          ladyTarget: calculateNameByID(data.inspectedID),
        })
      "
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import type { CheckLoyalty } from '@avalon/types';
import type { TCalculateNameByID } from '@/components/view/information/history/interface';

export default defineComponent({
  props: {
    data: {
      required: true,
      type: Object as PropType<CheckLoyalty>,
    },
    calculateNameByID: {
      required: true,
      type: Function as PropType<TCalculateNameByID>,
    },
  },
});
</script>

<style scoped lang="scss"></style>
