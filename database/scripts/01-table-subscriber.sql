CREATE TABLE "subscriber" (
    "id"  SERIAL  NOT NULL,

    "customer_name" VARCHAR(255) NOT NULL,
    "customer_phone" VARCHAR(255) NOT NULL,
    "customer_cpf" VARCHAR(255) NOT NULL,
    "customer_email" VARCHAR(255) NOT NULL,

    "vehicle_description" VARCHAR(255) NOT NULL,
    "vehicle_plate" VARCHAR(255) NOT NULL,
    "vehicle_year" INTEGER NOT NULL,
    "vehicle_warranty_date" DATE NOT NULL,

    "plan_product" VARCHAR(255) NOT NULL,
    "plan_begin_date" DATE NOT NULL,
    "plan_end_date" DATE NOT NULL,

    "created_at" TIMESTAMP NOT NULL,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "pk_subscriber" PRIMARY KEY (
        "id"
     )
);