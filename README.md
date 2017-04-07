# Adobe SUMMIT 2017 - Lab 3846

## Fuel your mobile apps with assets and content

This repository contains all the required content for completing the lab on your own instance of AEM 6.3.

## Getting Started

- Copy your own AEM 6.3 quickstart JARs to the `author` and `publish` directories
- Install Xcode (Mac OS only see: `Built for Mac OS` section)
- Copy `AEMM-Labs` directory to your desktop 
  - this is optional, but it makes the paths in the workbook correct
- Open the [Workbook](./AEMM-Labs/L3846/workbook/L3846_workbook.pdf) (PDF)
- Follow exercises in the workbook to complete lab goals

## Modules

This lab consists of the folowing six modules.

### Module 1: Setup and Introduction
- Start AEM author instance
- Start AEM publish instance
- Install initial content packages for lab to AEM
- Navigate to the Content Services app catalog

### Module 2: Mobile App Management
- Create a new space
- Create a new content mobile app
- Change meta data of app
- Add spaces to app

### Module 3: Extend Existing Content
- Create a new entity using built-in Page and Asset models
- Edit configuration of entity
- Preview generated data

### Module 4: Managing Models
- Create a new group model
- Edit the group properties
- Create a new model based on primitive model type
- Define availability of model
- Add data types to model

### Module 5: Managing Entities
- Create a new entity based on drink recipe model
- Edit properties of an entity
- Add references to other entities
- Preview completed entity
- Select single entity to publish
- Publish all entities under a space

### Module 6: Mobile Application (optional)
- Publish all initial content required by mobile app
- Launch XCode and run mobile app
- Explore use of content services data in app
- Edit entity and publish
- View changes in mobile app

## Issues?

Please log a Github issue on this project if errors are encountered.

## Built for Mac OS

This lab was developed for the Mac operating system. 
If you do not have an OS X machine, you can install the packages in `./AEMM-Labs/L3846/packages` onto your AEM author instance, and replicate them to publish.
Furthermore, the included sample application is an Xcode project which can only be used on a Mac OS.

## Need to Catch Up?

If you get stuck on a particular module and want to catch up to continue, there are severl catch up scripts included.

Each catch up script has the naming convention, `install-moduleX.command`. Where `X` is the module you are stuck on.

eg. `./AEMM-Labs/L3846/install-module2.command` will update your AEM instance to include all the content added during Module 2.


