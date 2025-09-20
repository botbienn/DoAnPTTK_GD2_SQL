# Certification & Examination Hosting Center Management System

## Overview

This project (“DoAnPTTK\_GD2\_SQL”) is a management system built for a **Certification and Examination Hosting Center**. It is designed to manage all aspects of certification programs and exams, including registration, scheduling, examination management, results, users, and reporting.

---

## Table of Contents

1. [Features](#features)
2. [Architecture & Technologies](#architecture--technologies)
3. [Data Model / Database Schema](#data-model--database-schema)
4. [Requirements](#requirements)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)

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

## Data Model / Database Schema

The database is implemented in **SQL Server** with the name `QuanLyDangKyThi`.
Below is an overview of the schema:

---

### 1. Employees & Accounts

| Table        | Description                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **NhanVien** | Stores employees’ information: name, birthdate, address, and type (`manager`, `receptionist`, `accountant`, `data-entry`). |
| **ACCOUNT**  | Login credentials linked **1–1** with `NhanVien`.                                                                          |
| **QuanLy**   | Subtype table for managers.                                                                                                |
| **TiepNhan** | Subtype table for receptionists.                                                                                           |
| **KeToan**   | Subtype table for accountants.                                                                                             |
| **NhapLieu** | Subtype table for data-entry staff.                                                                                        |

---

### 2. Certifications & Exam Schedules

| Table              | Description                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------- |
| **ChungChi**       | Certification catalog (type, name, fee).                                                    |
| **PhongThi**       | Exam rooms available at the center.                                                         |
| **LichThi**        | Exam schedules, referencing `ChungChi` and `PhongThi`, includes exam date, time, and venue. |
| **NhanVienCoiThi** | Assignment of employees to supervise specific exam sessions.                                |

---

### 3. Customers & Registration Forms

| Table           | Description                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **KhachHang**   | Customers (individuals or organizations) with personal details, ID, phone, and email.                                                   |
| **PhieuDangKy** | Registration form created for a customer, linked to the receptionist who processed it.                                                  |
| **PhieuCaNhan** | Subtype for individual registration forms.                                                                                              |
| **PhieuDonVi**  | Subtype for organizational registration forms, includes number of participants, exam type, requested date, and additional requirements. |

---

### 4. Finance & Payments

| Table              | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| **HoaDon**         | Invoice for each registration form, created by accountants.             |
| **PhieuThanhToan** | Payment record specific to organizational registrations (`PhieuDonVi`). |

---

### 5. Candidates & Exams

| Table             | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| **ThiSinh**       | Candidates linked to a registration form.                                                   |
| **PhieuDuThi**    | Exam admission ticket (exam number, schedule, score, created by manager).                   |
| **DanhSachCho**   | Waiting list of candidates pending confirmation or scheduling.                              |
| **DanhSachDKThi** | Many-to-many relation between `PhieuDangKy` (registrations) and `LichThi` (exam schedules). |

---

### 6. Results & Rescheduling

| Table              | Description                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| **KetQuaChungChi** | Certification results, issue date, status, customer confirmation, linked to data-entry staff and accountant. |
| **PhieuGiaHan**    | Rescheduling form for a candidate, linking one registration form to an old exam schedule and a new one.      |

---

### Main Relationships (ERD logic)

* **NhanVien** has **1–1** relation with **ACCOUNT**, and subtyped into **QuanLy / TiepNhan / KeToan / NhapLieu**.
* **KhachHang** (customer) has **1–N** relation with **PhieuDangKy** (registration forms).
* **PhieuDangKy** branches into **PhieuCaNhan** (individual) or **PhieuDonVi** (organization).
* **PhieuDangKy** has **1–N** relation with **ThiSinh** (candidates).
* **ThiSinh** are linked to **PhieuDuThi** (exam admission tickets) → which lead to **KetQuaChungChi** (results).
* **LichThi** (exam schedules) are linked to **ChungChi** (certifications) and **PhongThi** (rooms), and supervised by **NhanVienCoiThi**.
* **Finance** is handled by **HoaDon** (invoice) and **PhieuThanhToan** (payment form for organizations).
* **PhieuGiaHan** links a registration to two exam schedules (old/new) for rescheduling.

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








