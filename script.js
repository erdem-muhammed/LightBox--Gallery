const images = document.querySelectorAll("#images>img");
const lightBox = document.getElementById("lightBox");
const lightImg = document.querySelector("#lightBox img");
const cross = document.querySelector("#lightBox i");

images.forEach(
    function(element)
    {
        element.onclick = function()
        {
            lightBox.style.transform = "translateX(0)";
            const source = element.getAttribute("src");
            lightImg.setAttribute("src", source);
            setTimeout(function()
            {
                lightImg.style.transform = "scale(1)";
            }, 500);
        }
    }
)
cross.onclick = function()
{
    lightImg.style.transform = "scale(0)";
    setTimeout(function()
    {
        lightBox.style.transform = "translateX(100vw)";
    }, 500);
}