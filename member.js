function skillsMember()
{
    var skills = [];
    var skills = document.getElementsByClassName("skill");
    for (var i = 0; i < skills.length; i++)
    {
        var skill = skills[i];
        skill.addEventListener("click", function()
        {
            if (this.classList.contains("skill-active"))
            {
                this.classList.remove("skill-active");
            }
            else
            {
                this.classList.add("skill-active");
            }
        });
    }
}