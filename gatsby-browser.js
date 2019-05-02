/*global FC*/

exports.onRouteUpdate = () => {

  if (typeof FC == `object`) {
    FC.client.updateMiniCart();
  }
  console.log('typeof FC: ' + typeof FC);
}

