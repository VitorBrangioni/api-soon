const { Subscriber, Sequelize } = require('../../config/models');
const { DatabaseError } = Sequelize;


exports.register = async (req, res) => {
    try {
        const subscriber = req.body;

        if (!subscriber.customer || !subscriber.vehicle || !subscriber.plan) {
            return res.sendStatus(400);
        }
        const subscriberDbPattern = {
            customer_name: subscriber.customer.name,
            customer_phone: subscriber.customer.phone,
            customer_cpf: subscriber.customer.cpf,
            customer_email: subscriber.customer.email,

            vehicle_description: subscriber.vehicle.description,
            vehicle_plate: subscriber.vehicle.plate,
            vehicle_year: subscriber.vehicle.year,
            vehicle_warranty_date: subscriber.vehicle.warranty_date,

            plan_product: subscriber.plan.product,
            plan_begin_date: subscriber.plan.begin_date,
            plan_end_date: subscriber.plan.end_date
        };

        const subscriberCreated = await Subscriber.create(subscriberDbPattern);

        res.status(201).json(subscriberCreated);

    } catch (err) {
        if (err instanceof DatabaseError) {
            return res.sendStatus(400);
        }
        res.sendStatus(500);
    }

};

exports.show = (req, res) => {
    Subscriber.findAll()
        .then(
            subscribers => {

                const subscriberFormatted = [];
                for (let i = 0; i < subscribers.length; i++) {
                    const subscriber = subscribers[i];

                    subscriberFormatted.push({
                        customer: {
                            name: subscriber.customer_name,
                            phone: subscriber.customer_phone,
                            cpf: subscriber.customer_phone,
                            email: subscriber.customer_email
                        },
                        vehicle: {
                            description: subscriber.vehicle_description,
                            plate: subscriber.vehicle_plate,
                            year: subscriber.vehicle_year,
                            warranty_date: subscriber.vehicle_warranty_date,
                        },
                        plan: {
                            product: subscriber.plan_product,
                            begin_date: subscriber.plan_begin_date,
                            end_date: subscriber.plan_end_date,
                        }
                    });
                }

                res.status(200).json(subscriberFormatted);
            },
            err => {
                console.log(err);
                res.sendStatus(500);
            }
        );
};