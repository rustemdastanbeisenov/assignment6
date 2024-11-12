const staffMembers = {
    CEO: "Larry Zhou",
    ChefCook: "Egor Markin",
    Waiter: "Stanislav Marchishak",
    WebDesigner: "Rustemdastan Beisenov",

    displayStaff: function() {
        const staffSection = document.querySelector('.bg-light p:nth-of-type(2)');
        staffSection.innerHTML = `<dl>
            <dt><strong>CEO:</strong></dt>
            <dd>${this.CEO}</dd>
            <dt><strong>Chef Cook:</strong></dt>
            <dd>${this.ChefCook}</dd>
            <dt><strong>Waiter:</strong></dt>
            <dd>${this.Waiter}</dd>
            <dt><strong>Web Designer:</strong></dt>
            <dd>${this.WebDesigner}</dd>
        </dl>`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    staffMembers.displayStaff();
});