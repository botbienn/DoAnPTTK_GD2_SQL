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
