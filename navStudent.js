function add()
{
    document.getElementsByTagName('iframe')[0].setAttribute("src","addStudent.html");
}

function update()
{
    document.getElementsByTagName('iframe')[0].setAttribute("src","updateStudent.html");
}

function del() 
{
    document.getElementsByTagName('iframe')[0].setAttribute("src","deleteStudent.html")
    document.getElementsByTagName('iframe')[0].setAttribute("style","margin-left:10px;")
} 

function searching()
{
    document.getElementsByTagName('iframe')[0].setAttribute("src","generateStudent.html")
}