$(document).ready(function () {

  $("#nav-my-products").on("click", function (event) {
    event.preventDefault();

    location.href = "/api/products/vendor/" + localStorage.getItem("userId");
  });

  $("#nav-orders").on("click", function (event) {
    event.preventDefault();

    location.href = "/api/orders/vendor/" + localStorage.getItem("userId");
  });



  $("#add-product-btn").on("click", function (event) {
    event.preventDefault();

    //default date if not perishable
    var expiryDate = $("#expiryDate").val();

    if ($("[name=perishable]:checked").val().trim() === "0") {
      expiryDate = "9999-12-31";
    }

    var newProduct = {
      // eslint-disable-next-line camelcase
      product_name: $("#productName").val().trim(),
      // eslint-disable-next-line camelcase
      product_description: $("#productDesc").val().trim(),
      // eslint-disable-next-line camelcase
      product_img: $("#productImg").val().trim(),
      // eslint-disable-next-line camelcase
      product_expiry_date: expiryDate,
      // eslint-disable-next-line camelcase
      product_perishable: $("[name=perishable]:checked").val().trim(),
      // eslint-disable-next-line camelcase
      product_original_qty: $("#originalQty").val().trim(),
      // eslint-disable-next-line camelcase
      product_current_qty: $("#originalQty").val().trim(),
      // eslint-disable-next-line camelcase
      supplier_id: localStorage.getItem("userId"),
      // eslint-disable-next-line camelcase
      product_posted_date: today
    };

    // Send the PUT request.
    $.ajax("/api/products", {
      type: "POST",
      data: newProduct
    })
      .then(
        function () {
          console.log("New Product Added" + newProduct);
          // location.reload();
          location.href = "/api/products/vendor/" + localStorage.getItem("userId");
        }
      );
  });
});