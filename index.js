var current=1,count=0,end=0,player1=0,player2=0;
var grid=[0,0,0,0,0,0,0,0,0];
document.querySelector(".reset").addEventListener("click",clear);
function clear()
{
  for(var i=0;i<9;i++)
  grid[i]=0;
  current=1;
  count=0;
  end=0;
  for(var i=0;i<9;i++)
  {
    document.querySelectorAll(".edge")[i].textContent=".";
  }
}
function check()
{
    var flag=0;
    if((grid[0]+grid[1]+grid[2])===3||(grid[3]+grid[4]+grid[5])===3||(grid[6]+grid[7]+grid[8])===3||
      (grid[0]+grid[3]+grid[6])===3||(grid[1]+grid[4]+grid[7])===3||(grid[2]+grid[5]+grid[8])===3||
      (grid[0]+grid[4]+grid[8])===3||(grid[2]+grid[4]+grid[6])===3)
      {
        document.querySelector(".winner").textContent="Player1 Wins";
        flag=1;
        end=1;
        player1++;
        document.querySelector(".first").textContent=player1;
      }
      if((grid[0]+grid[1]+grid[2])===-3||(grid[3]+grid[4]+grid[5])===-3||(grid[6]+grid[7]+grid[8])===-3||
        (grid[0]+grid[3]+grid[6])===-3||(grid[1]+grid[4]+grid[7])===-3||(grid[2]+grid[5]+grid[8])===-3||
        (grid[0]+grid[4]+grid[8])===-3||(grid[2]+grid[4]+grid[6])===-3)
        {
          document.querySelector(".winner").textContent="Player2 Wins";
          flag=1;
          end=1;
          player2++;
          document.querySelector(".second").textContent=player2;
        }
      if(count==9)
      {
        if(flag==0)
        document.querySelector(".winner").innerHTML="Draw game";
        end=1;
      }
      current=1-current;

}
var len=document.querySelectorAll(".edge").length;
for(var i=0;i<len;i++)
{
  document.querySelectorAll(".edge")[i].addEventListener("click",handle);
}
function handle()
{
  var box=this.id;
  var num;
  if(end===1)
  {
    alert("PLAY AGAIN");
    return;
  }
  switch(box)
  {
    case "first":
    num=0;
    break;
    case "second":
    num=1;
    break;
    case "third":
    num=2;
    break;
    case "four":
    num=3;
    break;
    case "five":
    num=4;
    break;
    case "six":
    num=5;
    break;
    case "seven":
    num=6;
    break;
    case "eight":
    num=7;
    break;
    case "nine":
    num=8;
    break;
  }
  if(grid[num]===1||grid[num]===-1)
  alert("Invalid! choose other block");
  else {
    if(current==1)
    {
      grid[num]=1;
      document.querySelector("#"+box).textContent='X';
    }
    else {
      grid[num]=-1;
      document.querySelector("#"+box).textContent='0';
    }
    count++;
    check();
  }
}
