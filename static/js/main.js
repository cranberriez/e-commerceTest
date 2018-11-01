$(function(){
    generateShop(directory)
    generateTooltips(directory)
    renderCart()

    $(".items li").on("click", function() {
        $(".items li").removeClass("active")
        $(this).addClass("active")
        var href = $(this).attr("href")
        $(".item-tooltips .tooltip").removeClass("active")
        $("#" + href).addClass("active")
    })

    $(".items li").on("dblclick", function() {
        var href = $(this).attr("href")
        addToCart(href)
    })

})


var directory = {
    "iron-ore":{
        "price":12,
        "description":"Iron ore is a mineral block found underground. It is the most common mineral that can be used to make tools and armor.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2f3x2f32x2fNwts_Twj.uslx3fajwx78ntsx3d03175i5j68jh7f9j98i04h9ijj7ffgh7x26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"ores"
    },
    "gold-ore":{
        "price":48,
        "description":"Gold ore is one of the rarest types of mineral blocks found underground.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2fkx2fk2x2fLtqi_Twj.uslx3fajwx78ntsx3df8269j1f6h27fkk25k415gigg3f71gi3x26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"ores"
    },
    "redstone-ore":{
        "price":22,
        "description":"Redstone ore is the ore block from which redstone is obtained.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2f0x2f01x2fWjix78ytsj_Twj.uslx3fajwx78ntsx3d0hh430hjg10i00505h951hi8459k1g30x26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"ores"
    },
    "lapis-ore":{
        "price":18,
        "description":"Lapis lazuli ore is the ore block from which lapis lazuli is obtained.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2fhx2fh8x2fQfunx78_Qfezqn_Twj.uslx3fajwx78ntsx3d07h117ij898377f5032013fgg1hg75i8x26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"ores"
    },
    "iron-ingot":{
        "price":24,
        "description":"Iron ingots are versatile metal crafting ingredients.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2f5x2f5fx2fNwts_Nslty.uslx3fajwx78ntsx3d73933578g6khgj7ij9k67h287f87jf1kx26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"ingots"
    },
    "gold-ingot":{
        "price":60,
        "description":"Gold ingots are a metal that is used to craft the second tier of armor, and the first of tools.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2f7x2f77x2fLtqi_Nslty.uslx3fajwx78ntsx3d8299j559ig828h75h681k5i344g3ij4ix26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"ingots"
    },
    "diamond-gem":{
        "price":600,
        "description":"Diamonds are an uncommon material. They are mainly used to craft the highest tier of tools and armor, and the enchantment table.",
        "img":"https://d1u5p3l4wpay3k.cloudfront.net/minecraft_gamepedia/e/ea/Diamond.png?version=c9b0ffa6a1a195a7585131569134bd54",
        "category":"gems"
    },
    "emerald-gem":{
        "price":260,
        "description":"Emeralds are an uncommon material, and are the currency used in villager trading.",
        "img":"https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6rnsjhwfky.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2frnsjhwfky_lfrjujinfx2f1x2f1fx2fJrjwfqi.uslx3fajwx78ntsx3dj550gg3283g838588k265h6286h2357fx26n65h.rfwpx3dnrflj_$/$/$/$/$",
        "category":"gems"
    }
}

var cart = {}

function addToCart(element) {
    if (isNaN(cart[element])) {
        cart[element] = 0
    }
    cart[element] += parseInt($(".multiplier option:selected").val())
    renderCart()
}

function removeFromCart(element) {
    cart[element] -= parseInt($(".multiplier option:selected").val())
    if (cart[element] <= 0) {
        delete cart[element]
    }
    renderCart()
}

function clearCart() {
    for (var element in cart) {
        delete cart[element]
    }
    renderCart()
}

function renderCart() {
    if (Object.keys(cart).length <= 0) {
        $(".item-cart").addClass("hidden")
    }
    else {
        $(".item-cart").removeClass("hidden")
    }
    $(".item-cart ul li:not(.cart-key)").remove()
    total = 0
    for(var element in cart) {
        total += cart[element] * directory[element].price
        $(".item-cart ul").append(`<li><p><button onclick="removeFromCart('${element}')">x</button> ${element.replace("-"," ")}</p> <p>${cart[element]}</p><p>$${cart[element] * directory[element].price}</p></li>`)
    }
    $(".item-cart ul").append(`<li class='cart-total'><p>Total</p><p></p><p>$${total}</p></li>`)
    $(".item-cart ul").append(`<li class='receipt'><button onclick="generateReceipt()">Generate Receipt</button></li>`)
}

function generateShop(directory) {
    clearShop()

    var activeCategories = []
    var firstItem = true
    for (var element in directory) {
        var category = directory[element].category
        if (!activeCategories.includes(category)) {
            activeCategories.push(category)
            $(".items").append(`<ul class='${category}'><h1>${capitalise(category)}</h1></ul>`)
        }

        if (firstItem) {
            firstItem = !firstItem
            $("." + category).append(`<li class='active' href='${element}'><img src="${directory[element].img}"/><div>${capitalise(element.split("-")[0])} <p>$${directory[element].price}</p></div></li>`)
        }
        else {
            $("." + category).append(`<li href='${element}'><img src="${directory[element].img}"/><div>${capitalise(element.split("-")[0])} <p>$${directory[element].price}</p></div></li>`)
        }
    }
}

function clearShop() {
    $('.items ul').remove()
}

function generateTooltips(directory) {
    var firstItem = true
    for (var element in directory) {
        
        if (firstItem) {
            firstItem = !firstItem
            $(".item-tooltips").append(`
            <div class='active tooltip' id='${element}'>
                <h3>${element.replace("-", " ")} <button onclick="addToCart('${element}')">Add to Cart</button></h3>
                <p>${directory[element].description}</p>
            </div>`)
        }
        else {
            $(".item-tooltips").append(`
            <div class='tooltip' id='${element}'>
                <h3>${element.replace("-", " ")} <button onclick="addToCart('${element}')">Add to Cart</button></h3>
                <p>${directory[element].description}</p>
            </div>`)
        }
    }
    $(".item-tooltips").append(`
    <div class='item-cart hidden'>
        <h3>Your Cart <button onclick="clearCart()">Clear Cart</button></h3>
        <ul>
            <li class='cart-key'><p>Item</p><p>Count</p><p>Price</p></li>
        </ul>
    </div>`)
}

function clearTooltips() {
    $('.tooltip').remove()
    $(".item-cart").remove()
}

function capitalise(word) {
    return word[0].toUpperCase() + word.slice(1,word.length)
}

function generateReceipt() {
    receiptCode = ""
    for (var element in cart) {
        receiptCode += element.slice(0,2) + element.slice(element.length-1,element.length)
        receiptCode += cart[element]
    }
    alert("Give this code to one of our sales personnel to purchase your materials: " + receiptCode)
    console.log(receiptCode)
}