import localFont from "next/font/local";

export const nunitoSans = localFont({
  src: [
    {
      path: './NunitoSans-Light.ttf',
      weight: '300',
      style: 'light'
    },
    {
      path: './NunitoSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './NunitoSans-Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: './NunitoSans-SemiBold.ttf',
      weight: '600',
      style: 'semiBold'
    }
  ]
});
