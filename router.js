const router = require('express').Router();
const { Employee } = require('./employeeTable');

// get all the employees
router.get('/employee', async (req, res)=> {
    res.send(await Employee.findAll({}));
});

// get any employee with id
router.get('/employee/:empId', async (req, res)=> {
    const id  = req.params.empId;
    res.send( await Employee.findByPk(id));
});

//save new prodct
// router.post('/employee', async (req, res)=> {
//     res.json(await Employee.create(req.body));
// });
// Save new employee
router.post('/employee', async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.json(newEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

/* we use json because we save the data in the form of an object*/

// delete an employee by using id
// router.delete('/employee/:empId', async (req, res) => {
//     const id = req.params.empId;
//     res.json(await Employee.destroy({where: {empid: id }}));
// });
// delete an employee by using id
router.delete('/employee/:empId', async (req, res) => {
    const empId = req.params.empId;

    try {
        const deletedEmployee = await Employee.destroy({ where: { empid: empId } });

        if (deletedEmployee) {
            res.json({ message: `Employee with ID ${empId} deleted successfully.` });
        } else {
            res.status(404).json({ error: `Employee with ID ${empId} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


//update the new products 
// router.put('/employee/:empId', async (req, res) => {
//     const id = req.params.empId;
//     const data = req.body;
//     res.send( await Employee.update(data, {
//         where: {empid: id},
//         returning: true,
//         plain: true,
//     }));
// });
router.put('/employee/:empId', async (req, res) => {
    const id = req.params.empId;
    const data = req.body;

    try {
        const [rowsAffected, [updatedEmployee]] = await Employee.update(data, {
            where: { empid: id },
            returning: true,
        });

        if (rowsAffected > 0) {
            res.json(updatedEmployee.get({ plain: true }));
        } else {
            res.status(404).json({ error: `Employee with ID ${id} not found.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/auth/login', (req, res)=> {
    const data = req.body;
    if(data.username === "admin" && data.password === "admin"){
        res.json({token: "thisismytoken"});
    }else {
        res.status(401).send("invalid credentials");
    }
});

module.exports = router;