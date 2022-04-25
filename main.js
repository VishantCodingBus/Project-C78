var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/mother.jpg" , "https://i.postimg.cc/5ymDKL83/father.jpg", "https://i.postimg.cc/JnL6wtrd/mother.jpg", "https://i.postimg.cc/bw5W5zSK/bro.jpg", "https://i.postimg.cc/bw5W5zSK/sister.jpg"];
var names = ["Family Book","Ramchandra Ganpat Jadhav", "Reshma Ramchandra Jadhav", "Girish Ramchandra Jadhav", "Madhuri Girish Jadhav", "Vishant Girish Jadhav", "Gargi Girish Jadhav"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
