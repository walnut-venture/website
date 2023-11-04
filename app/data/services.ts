export const GET_SERVICES = `query {
  servicesCollection {
    items {
      title
      subtitle
      text
      image {
        url
      }
    }
  }
}`;
