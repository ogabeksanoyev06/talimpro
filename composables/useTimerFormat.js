import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useActiveTestStore } from '@/stores/ActiveTestStore';

export const useTimerFormat = () => {
   const activeTestStore = useActiveTestStore();

   const { testTimer } = storeToRefs(activeTestStore);

   const timerFormat = (time) => {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      const format = (num) => (num < 10 ? `0${num}` : num);

      return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
   };

   return {
      timerFormat
   };
};
