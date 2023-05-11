
let x;
let cards = [
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/2fb41918525137217686effae3aa22fc3ae6ad89-1288x1800.png?rect=0,0,1288,1798&w=328&h=458&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/004f5eedfb4d963b68096110614a87cc0428dba0-722x942.png?rect=0,1,722,940&w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/004f5eedfb4d963b68096110614a87cc0428dba0-722x942.png?rect=0,1,722,940&w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/004f5eedfb4d963b68096110614a87cc0428dba0-722x942.png?rect=0,1,722,940&w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/004f5eedfb4d963b68096110614a87cc0428dba0-722x942.png?rect=0,1,722,940&w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/004f5eedfb4d963b68096110614a87cc0428dba0-722x942.png?rect=0,1,722,940&w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/2fb41918525137217686effae3aa22fc3ae6ad89-1288x1800.png?rect=0,0,1288,1798&w=328&h=458&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/fe21a6ec733906dc446816a428a7a777749be016-722x940.png?w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/fe21a6ec733906dc446816a428a7a777749be016-722x940.png?w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/fe21a6ec733906dc446816a428a7a777749be016-722x940.png?w=328&h=427&auto=format',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/fe21a6ec733906dc446816a428a7a777749be016-722x940.png?w=328&h=427&auto=format',
    'https://fifauteam.com/images/items/icons/fifa23/items/ronaldo-95.webp',
    'https://cdn.theathletic.com/app/uploads/2022/09/10053301/Messi_158023-1.png',
    'https://pbs.twimg.com/media/FsKZqb0WIAQ7blB.jpg',
    'https://cdn.realsport101.com/images/ncavvykf/realsport-production/c1f631acb6546508697ddc9f726172d940dc75c4-215x300.jpg?w=215&h=300&auto=format',
    'https://image-service.onefootball.com/transform?w=280&h=391&dpr=2&image=https%3A%2F%2Fcdn.givemesport.com%2Fwp-content%2Fuploads%2F2023%2F01%2FMbappe.png',
    

    

];
document.getElementById("RollButton").onclick = function(){
     x = Math.floor(Math.random() * 15) + 1;
     
     document.getElementById("fifaCard").src = cards[x];
     document.getElementById("RollResetButton").style.display = 'block';
     document.getElementById("RollButton").style.display = 'none';
     
}

document.getElementById("RollResetButton").onclick = function(){
    document.getElementById("fifaCard").src = "https://www.fifplay.com/img/fifa/23/packs/fifa-23-pack.png";
    document.getElementById("RollResetButton").style.display = 'none';
    document.getElementById("RollButton").style.display = 'block';
}