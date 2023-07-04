import localFont from "next/font/local";

export const sanFrancisco = localFont({
  src: [
    {
      path: './SF-Pro-Display-Light.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: './SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'semiBold'
    }
  ]
});
