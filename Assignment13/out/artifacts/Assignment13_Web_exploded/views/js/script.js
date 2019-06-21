$(function () {

    $('#btn_add').click(addProduct);

    function addProduct() {
        var productName = $('#product_name').val();
        var productPrice = $('#product_price').val();
        var product = {name: productName, price: productPrice};
        $.post('product', {product: JSON.stringify(product)}, processData, "json")
    }

    function processData(data) {
          //data = JSON.parse(data);
        var td0 = $('<td>').text(data.id);
        var td1 = $('<td>').text(data.name);
        var td2 = $('<td>').text(data.price);
        var tr = $('<tr>').append(td0).append(td1).append(td2);
        $('tbody').append(tr);
    }


    $('.addbutton').click(function(){
        var id = this.id;
        $.post("/product",{id: id}).done(success).fail(failed);

        function success() {
            $('#'+id+'.addbutton').attr("disabled", true);
        }

        function failed(){
            alert("Couldn't add product to Shopping Cart");
        }
    });
})
