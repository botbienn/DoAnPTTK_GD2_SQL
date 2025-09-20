# Certification & Examination Hosting Center Management System

## Overview

This project (“DoAnPTTK\_GD2\_SQL”) is a management system built for a **Certification and Examination Hosting Center**. It is designed to manage all aspects of certification programs and exams, including registration, scheduling, examination management, results, users, and reporting.

---

## Table of Contents

1. [Features](#features)
2. [Architecture & Technologies](#architecture--technologies)
3. [Requirements](#requirements)
4. [Setup and Installation](#setup-and-installation)
5. [Usage](#usage)

---

## Features

Here are the main capabilities the system provides:

* **User Management**: manage different user roles (administrators, examiners, candidates, etc.)
* **Exam Registration & Scheduling**: candidates can register, pay fee, get scheduled, etc.
* **Certification Programs Management**: define types of certificates, prerequisites, validity, etc.
* **Exam Management**: define exam sessions, venues, invigilators, times, seat allocations.
* **Result Processing & Reporting**: input/check results, issue certificates.
* **Security & Access Control**: role-based permissions, data integrity, audit logs.

---

## Architecture & Technologies

* **Database**: MSSQL (Relational DB) — schema defines tables for users, exams, registrations, certificates, etc.
* **Backend**: (If applicable) e.g. RESTful API / MVC architecture
* **Frontend**: (If applicable) Web UI for users
* **Other**: scheduling logic, perhaps batch jobs (for reminders), logging.

---

## Requirements

* Operating System: Windows / Linux / macOS
* SQL database server (e.g. MySQL / PostgreSQL / SQL Server)
* (If applicable) Web server / Application server / Runtime (e.g. Java, .NET, Node.js, Python, etc.)
* Credentials / environment variables for DB connection

---

## Setup and Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/botbienn/DoAnPTTK_GD2_SQL.git
   cd DoAnPTTK_GD2_SQL
   ```

2. **Database Setup**

   * Create a new database
   * Run the provided SQL scripts (schema, seed data) to create tables and initial data

3. **Configuration**

   * Set DB connection strings / credentials
   * Configure any application settings (mail server, file paths, etc.)

4. **Backend / Frontend Installation (if exists)**

   * Install dependencies
   * Build / compile if needed
   * Run the server / application

5. **Launch**

   * Start the backend
   * Access through specified port / URL

---

## Usage

* **Administrator:** manage exams, users, roles
* **Examiner / Staff:** set up exam sessions, grade exams
* **Candidates:** register, view schedule, view results
* **Reporting:** generate reports of exam pass rates, certificate issuance, etc.

<img width="1036" height="536" alt="image" src="https://github.com/user-attachments/assets/62d84e9a-9f82-4dca-9992-74b511e30fb4" />
<img width="956" height="554" alt="image" src="https://github.com/user-attachments/assets/652d8fc6-3d51-4875-a1ec-35115766b5e6" />
<img width="838" height="675" alt="image" src="https://github.com/user-attachments/assets/f19cad42-ffa0-475d-8d2e-59dc5a74841a" />
<img width="838" height="470" alt="image" src="https://github.com/user-attachments/assets/e7c777eb-3640-4bb4-9f8b-e6722795d9e8" />
<img width="838" height="424" alt="image" src="https://github.com/user-attachments/assets/9230848f-9ee2-4bd0-9cf5-d1d76009bd5f" />
<img width="839" height="469" alt="image" src="https://github.com/user-attachments/assets/69092e85-8aaf-409f-bea5-ac8289817d16" />
<img width="840" height="433" alt="image" src="https://github.com/user-attachments/assets/cd28dc81-9df1-42a8-88ca-71aa4249b442" />
<img width="840" height="600" alt="image" src="https://github.com/user-attachments/assets/d6f7d395-01c3-4188-8b67-6ef3bab81c87" />








