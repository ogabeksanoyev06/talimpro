export function phoneFormat(phoneNumber) {
   try {
      if (!phoneNumber) return '';
      const cleaned = ('' + phoneNumber).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/);
      if (match) {
         return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`;
      }
      return phoneNumber;
   } catch {
      return phoneNumber;
   }
}

export function currencyFormat(amount) {
   try {
      if (!amount) return '0';
      const formatter = new Intl.NumberFormat('uz-UZ', {
         style: 'decimal',
         useGrouping: true,
         minimumFractionDigits: 0,
         maximumFractionDigits: 0
      });
      return formatter.format(amount).replace(/,/g, ' ');
   } catch {
      return amount;
   }
}
