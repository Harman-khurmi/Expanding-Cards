let panels=document.querySelectorAll(".panels");

panels.forEach((panel)=>
{
    panel.addEventListener("click",()=>
    {
        removeacitive(panel);
        panel.classList.add("active");
    })
});

let removeacitive=(panel)=>
{
    panels.forEach((panel)=>
    {
        panel.classList.remove("active");
    })
};
//ed