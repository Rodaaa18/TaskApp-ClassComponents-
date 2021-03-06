USE [master]
GO
/****** Object:  Database [ENSOLVERS_APP]    Script Date: 13/12/2021 21:37:07 ******/
CREATE DATABASE [ENSOLVERS_APP] ON  PRIMARY 
( NAME = N'ENSOLVERS_APP', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\ENSOLVERS_APP.mdf' , SIZE = 2304KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ENSOLVERS_APP_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\ENSOLVERS_APP_log.LDF' , SIZE = 576KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ENSOLVERS_APP] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ENSOLVERS_APP].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ENSOLVERS_APP] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET ARITHABORT OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ENSOLVERS_APP] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ENSOLVERS_APP] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ENSOLVERS_APP] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ENSOLVERS_APP] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ENSOLVERS_APP] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ENSOLVERS_APP] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ENSOLVERS_APP] SET  MULTI_USER 
GO
ALTER DATABASE [ENSOLVERS_APP] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ENSOLVERS_APP] SET DB_CHAINING OFF 
GO
USE [ENSOLVERS_APP]
GO
/****** Object:  User [EnsolversTeam]    Script Date: 13/12/2021 21:37:07 ******/
CREATE USER [EnsolversTeam] FOR LOGIN [EnsolversTeam] WITH DEFAULT_SCHEMA=[dbo]
GO
sys.sp_addrolemember @rolename = N'db_datareader', @membername = N'EnsolversTeam'
GO
sys.sp_addrolemember @rolename = N'db_datawriter', @membername = N'EnsolversTeam'
GO
/****** Object:  Table [dbo].[Folders]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Folders](
	[id_folder] [int] IDENTITY(1,1) NOT NULL,
	[name_folder] [varchar](50) NULL,
	[state_folder] [bit] NULL,
 CONSTRAINT [pk_folder] PRIMARY KEY CLUSTERED 
(
	[id_folder] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[id_task] [int] IDENTITY(1,1) NOT NULL,
	[name_task] [varchar](50) NULL,
	[task_state] [bit] NULL,
 CONSTRAINT [pk_task] PRIMARY KEY CLUSTERED 
(
	[id_task] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task_X_Folders]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task_X_Folders](
	[id_txf] [int] IDENTITY(1,1) NOT NULL,
	[id_task] [int] NULL,
	[id_folder] [int] NULL,
 CONSTRAINT [pk_txf] PRIMARY KEY CLUSTERED 
(
	[id_txf] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id_user] [int] IDENTITY(1,1) NOT NULL,
	[userName] [varchar](20) NULL,
	[usPassword] [varchar](20) NULL,
 CONSTRAINT [pk_users] PRIMARY KEY CLUSTERED 
(
	[id_user] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Folders] ON 

INSERT [dbo].[Folders] ([id_folder], [name_folder], [state_folder]) VALUES (1, N'Tareas', 0)
INSERT [dbo].[Folders] ([id_folder], [name_folder], [state_folder]) VALUES (2, N'Magali', 0)
SET IDENTITY_INSERT [dbo].[Folders] OFF
GO
SET IDENTITY_INSERT [dbo].[Task] ON 

INSERT [dbo].[Task] ([id_task], [name_task], [task_state]) VALUES (1, N'Correr', 0)
INSERT [dbo].[Task] ([id_task], [name_task], [task_state]) VALUES (2, N'Aprender más', 0)
INSERT [dbo].[Task] ([id_task], [name_task], [task_state]) VALUES (3, N'Lavar Ropa', 0)
SET IDENTITY_INSERT [dbo].[Task] OFF
GO
ALTER TABLE [dbo].[Task_X_Folders]  WITH CHECK ADD  CONSTRAINT [fk_folders] FOREIGN KEY([id_folder])
REFERENCES [dbo].[Folders] ([id_folder])
GO
ALTER TABLE [dbo].[Task_X_Folders] CHECK CONSTRAINT [fk_folders]
GO
ALTER TABLE [dbo].[Task_X_Folders]  WITH CHECK ADD  CONSTRAINT [fk_task] FOREIGN KEY([id_task])
REFERENCES [dbo].[Task] ([id_task])
GO
ALTER TABLE [dbo].[Task_X_Folders] CHECK CONSTRAINT [fk_task]
GO
/****** Object:  StoredProcedure [dbo].[SP_CREATE_TASK]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SP_CREATE_TASK]
--@id_task int,
@name_task varchar (50)

AS
begin
insert into Task(name_task, task_state)
output inserted.id_task, inserted.name_task, inserted.task_state
values (@name_task,0);

END
GO
/****** Object:  StoredProcedure [dbo].[SP_DELETE_TASK]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_DELETE_TASK]
@id_task int

AS



BEGIN
    
DELETE FROM Task WHERE id_task = @id_task;
				
END
GO
/****** Object:  StoredProcedure [dbo].[SP_UPDATE_TASK]    Script Date: 13/12/2021 21:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_UPDATE_TASK]
@name_task varchar (50),
@id_task int,
@task_state bit

AS
BEGIN
    
UPDATE Task  set name_task = @name_task, task_state = @task_state where id_task = @id_task
				
END
GO
USE [master]
GO
ALTER DATABASE [ENSOLVERS_APP] SET  READ_WRITE 
GO
