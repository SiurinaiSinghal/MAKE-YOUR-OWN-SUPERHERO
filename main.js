var canvas = new fabric.Canvas("myCanvas");
var block_img_width = 30;
var block_img_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x,
        })
        canvas.add(player_object);
    });
}

function new_image(block_img) {
    fabric.Image.fromURL(block_img, function (img) {
        block_img_obj = img;
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.set({
            top: player_y,
            left: player_x,

        })

        canvas.add(block_img_obj);

    });

}

window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (e.shiftKey == true && keypress == "80") {
        console.log("p and shiftKey are pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }

    if (e.shiftKey == true && keypress == "77") {
        console.log("m and shiftKey are pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;

    }

    if (keypress == "37") {
        left();
        console.log("left");
    }

    if (keypress == "38") {
        up();
        console.log("up");
    }

    if (keypress == "39") {
        right();
        console.log("right");
    }

    if (keypress == "40") {
        down();
        console.log("down");
    }

    if (keypress == "70") {
        new_image("ironman_face.png");
        console.log("f")
    }

    if (keypress == "66") {
        new_image("spiderman_body.png");
        console.log("b")
    }

    if (keypress == "76") {
        new_image("hulk_legs.png");
        console.log("l")
    }

    if (keypress == "82") {
        new_image("thor_right_hand.png");
        console.log("r")
    }

    if (keypress == "72") {
        new_image("captain_amarica_left_hand.png");
        console.log("h")
    }


}

function up() {
    if (player_y >= 0)
        player_y = player_y - block_img_height;
    console.log("block_img_height=" + block_img_height);
    console.log("player_x = " + player_x);
    console.log("player_y= " + player_y);
    canvas.remove(player_object);
    player_update();

}

function down() {
    if (player_y <= 500)
        player_y = player_y + block_img_height;
    console.log("block_img_height=" + block_img_height);
    console.log("player_x = " + player_x);
    console.log("player_y = " + player_y);
    canvas.remove(player_object);
    player_update();

}

function left() {
    if (player_x >= 0)
        player_x = player_x - block_img_width;
    console.log("block_img_width=" + block_img_width);
    console.log("player_x = " + player_x);
    console.log("player_y= " + player_y);
    canvas.remove(player_object);
    player_update();

}

function right() {
    if (player_x <= 850)
        player_x = player_x + block_img_width;
    console.log("block_img_width=" + block_img_width);
    console.log("player_x = " + player_x);
    console.log("player_y = " + player_y);
    canvas.remove(player_object);
    player_update();

}








