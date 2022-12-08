## How to build and deploy a MERN ( React + Express + MongoDB + Node.js ) Stack Application on AWS EC2?

_In this post we are going to setup a production ready web server from scratch on AWS EC2 instace and deploy MERN Stack application that have regisistratioand Goal setting Functionality ?_

## What is MERN Stack App ?

A MERN Stack application is made up of a front app built with React and React frontend is connected to backend api built with Node.js + Expressjs + MongoDB, hence the name MERN (MongoDB , Expressjs , React, Nodejs). Other variations of stack include the MEAN Stack that has uses Angular as frontend and MEVN Stack that use Vue.js as frontend.

## Scope of this tutorial

This tutorial is focused on setting a Cloud server on AWS EC2 then deploymennt and configration of frontend and backend part of the MERN App to work. Application that we are going to deploy is available at following address:

### [MERN Stack Goal Setter Application ](https://github.com/abdulwaqar844/mern-ec-2)

## Content of Tutorial

- Create a new Ubuntu Server on AWS EC2
- Connect local Terminal to Ubunto EC2 instance via SSH
- Setup and install Nodejs, MongoDB, PM2, NGINX
- Deploy Backend and frontend of application.
- Configure NGINX to server APIS.
- Test MERN STack App in a browser

In this tutorial we're going to setup a production ready web server from scratch on the Amazon EC2 (Elastic Compute Cloud) service, then deploy a custom MERN Stack application to it that supports user registration ,auth and Goal Setter function.

What is a MERN Stack App?
A MERN Stack application is made up of a front-end app built with React that connects to a back-end api built with Node.js + Express + MongoDB, hence the name MERN Stack (Mongo, Express, React, Node). Other variations of the stack include the MEAN Stack that has an Angular front-end, and the MEVN Stack that has a Vue.js front-end.

## Scope of this tutorial

The goal of this is to setting up the server on AWS EC2, then deploying and configuring the frontend and backend pieces of the MERN stack app to work together.

Tutorial Contents
Create a new Ubuntu server on AWS EC2
Connect to Ubuntu EC2 instance via SSH
Setup server with Node.js + MongoDB + NGINX
Deploy Node.js + MongoDB back-end API
Deploy React + Redux Front-end app
Configure NGINX to serve API and front-end
Test the MERN Stack app in a browser

## 1. How to Create a new Ubuntu Server on AWS EC2

First thing we need for this tutorial is Server, follow these step to setup a new Ubuntu 18.04 Server instance on AWS EC2.

1. Sign into the AWS Management Console at https://aws.amazon.com/console/. If you don't have an account yet click the "Create a Free Account" button and follow the instructions.
2. Go to the EC2 Service section in AWS console.
3. Click the "Launch Instance" button.
4. Choose AMI - For learning purpspose you ca use "Free tier only" , enter name of Your server in Name box and press enter, then select the "Ubuntu Server 18.04" Amazon Machine Image (AMI).
5. Choose Instance Type -We are using Free Tier so We will Select the "t2.micro" (Free tier eligible) instance type and click "Configure Security Group" in the top menu.

6. Configure Security Group - Add a new rule to allow HTTP traffic then click "Review and Launch".

7. Review details and then Click Launch

8. We need key pair to connect Terminal to Ubunto Server . Select "Create a new key pair", enter a name for the key pair (e.g. "mern-key-pair") and click "Download Key Pair" to download the private key, we will use this to connect to the server via SSH.
9. Click "Launch Instances", then scroll to the bottom of the page and click "View Instances" to see details of the new Ubuntu EC2 instance that is launching.

## 2. How to connect our local Machine's Terminal to Ubuntu EC2 Instance via SSH

Once the newly created EC2 instance reaches a running state you can connect to it via SSH using the private key downloaded in the previous step.

1. Open terminal window where we have downloaded our keys and update the permissions of the private key file with the command chmod 400 </path-to-key-file/> e.g. chmod 400 ~/Downloads/my-aws-key.pem,If you have opened terminal in same directory then we don't need to pass path just pass file name of keys otherwise pass complete path to keys. The key must not be publicly viewable for SSH to work.

2. Select Newly created Server and click the button "connect" at the top and goto SSH Client Tab. Here you can see a command to connect to Server like ssh -i </path-to-key-file/> ubuntu@</domain name/> copy this command and paste in your local terminal change directory if your terminal is not opened in same directory .
3. Enter _yes_ to the prompt "Are you sure you want to continue connecting (yes/no)?" to add the url to your list of known hosts.

NOTE: If you're using Windows you can connect to your instance via SSH using the PuTTY SSH client, for instructions see Connect Using [PuTTY in the AWS docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html?icmpid=docs_ec2_console).

## 3. How to setup Server with Nodejs , Mongodb, PM2, Nginx

Now We have to install required packeges one by one by passing command of specific packages. In this tutorial will Install Required dependencies on our server by pasting following command in our terminal. This command will install all required packages :

```
curl https://gist.githubusercontent.com/cornflourblue/f0abd30f47d96d6ff127fe8a9e5bbd9f/raw/e3047c9dc3ce8b796e7354c92d2c47ce61981d2f/setup-nodejs-mongodb-production-server-on-ubuntu-1804.sh | sudo bash
```

This command will install following packeges:

- NodeJS 10
- MongoDB
- PM2
- Nginx
  and other configrations and start MongoDB and NGINX on the server.

Now Our server is in running state and Required packeges are installed successfully. Let's move to our application code that we will deploy.

## 4. Clone Project on your server by pasting following command

```
git clone https://github.com/abdulwaqar844/mern-ec-2.git
```

1. goto mern-ec-2 directory and intall dependencies by running

```
 sudo npm install
```

2. Now change directory and goto frontend folder and and intall dependencies by running

```
sh sudo npm install
```

3. After installing dependencies make build of React Application by running

```
sudo npm run build
```

_Note: We will server our static content from build folder using NodeJS API_

## 5. Config NGINX server using following commands

- Delete the default NGINX site config file with the command

```
sudo rm /etc/nginx/s ites-available/default
```

- Launch the nano text editor to create an new default site config file with

```
 sudo nano /etc/nginx/sites-available/default
```

- Paste following data in nano editor and save it.

```sh
server {
listen 80 default_server;
server_name _;

# Backend
location / {
  proxy_pass http://localhost:4001/;
}
}
```

- Save the file by pressing ctrl + x and selecting Yes to save.

- Restart NGINX with the command sudo systemctl restart nginx

## 6. Starting the server using pm2 module

_We have already installed required packeges including pm2._ Follow these instruction to start pm2 process to run nodejs application:

- Go to your project root directory. Install dependencies if you have not installed by running `sudo npm install`
- In this project main server file is exists in root folder. Run the following command in root directory of project :

```
sudo pm2 start server.js
```

This command will start backend of our nodejs application and show the list of running processes.

### You have deployed your MERN app successfully . Moreover you can add Elastic IP to your EC2 instance. your can add Domain name to your app using route53 service in Aws . You can protect you app form attacks using AWS Waf ( web application firewall).


<hr/>

####  Hi, I'm Waqar. I'm A Web Developer working as MERN Stack developer. You can hire me on [Fiverr](https://www.fiverr.com/abdulwaqar844) and [Upwork](https://www.upwork.com/freelancers/~018b5ba1ba5bdbb8f3). I love to share thing about technologies , I use in my daily life like  GraphQL , AWS , Typescript and React 
