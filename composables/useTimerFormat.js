import { ref } from 'vue';
import { useActiveTestStore } from '@/stores/ActiveTestStore';

export const useTimerFormat = () => {
   const testTimer = ref(0);
   const activeTestStore = useActiveTestStore();

   const setTimer = () => {
      const interval = setInterval(() => {
         if (testTimer.value <= 0) {
            // activeTestStore.testFinish();
            clearInterval(interval);
         } else {
            testTimer.value--;
         }
      }, 1000);
   };

   const timerFormat = (time) => {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      const format = (num) => (num < 10 ? `0${num}` : num);

      return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
   };

   return {
      testTimer,
      setTimer,
      timerFormat
   };
};
