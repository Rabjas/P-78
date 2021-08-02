var images=["Family.jpg","grandfather.png","grandmother.jpg","Father.jpg","Mother.png","Brother.jpg","Sister.jpg"];

var names=["My Family","Grandfather","Grandmother","Father","Mother","Brother","Sister"];

var i=0;

function update(){
    i++;
    var number_of_members=6

    if(i>number_of_members){
        i=0;

    }
    var update_image=images[i];

    var update_names=names[i];

    document.getElementById("image").src=update_image;

    document.getElementById("name").innerHTML=update_names;
}