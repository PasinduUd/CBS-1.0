## User
#INSERT INTO user(user_type, username, password, acc_level) values ('A','customer-001','$2a$10$.oYen/SywSkrTnR5rlz9V.w06G3D4hz2uoBQZgVhm/CoR8Idqs7xC',1);
#INSERT INTO user(user_type, username, password, acc_level) values ('A','org-001','$2a$10$5vED6S5g7cgRp1Gi9nBXUeC3UC7G0L2c0QsSuy4JnVeAyaBlEi2Yq',1);
# INTO user(user_type, username, password, acc_level) values ('E','emp-001','$2a$10$5qEe8hgSiZ2/lk5y4BfEAu9GwbF2GFdn7TfALz.2rNvO.XZ.LW74O',2);

##--------------------------------------------------------------------------------------------------------------------------------------------------
## AccountOwner

##--------------------------------------------------------------------------------------------------------------------------------------------------
## Branch
INSERT INTO branch (branch_id, branch_name, street, city, postal_code, grade, contact_No) values (1, 'kottawa', 'main road', 'Kottawa', 12432, 1, 0776549801);

##--------------------------------------------------------------------------------------------------------------------------------------------------
## Post
INSERT INTO post(post_id, post_name, salary) values (1, "Bannk Manager", 50000.00);
INSERT INTO post(post_id, post_name, salary) values (2, "Employee", 20000.00);

##--------------------------------------------------------------------------------------------------------------------------------------------------
## Employee

##--------------------------------------------------------------------------------------------------------------------------------------------------
## Organization

##--------------------------------------------------------------------------------------------------------------------------------------------------
## Customer

##--------------------------------------------------------------------------------------------------------------------------------------------------
## SavingAccountPlan
insert into saving_accout_plan (name, min_age, max_age, interest_rate, min_balance_to_open, maximum_num_wt) values 
("Children", 0, 11, 12, 0, 0),
("Teen", 12, 18, 11, 500, 0),
("Adult", 19, 59, 10, 1000, 5),
("Senior", 60, 250, 13, 1000, 5),
("Organizational", 0, 250, 5, 10000, 100);

##--------------------------------------------------------------------------------------------------------------------------------------------------
