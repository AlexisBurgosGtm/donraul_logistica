USE [VENTAS]
GO

/****** Object:  View [dbo].[W_DESPACHO_PRODUCTOS]    Script Date: 9/05/2023 13:22:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[W_DESPACHO_PRODUCTOS]
AS
SELECT        dbo.Documentos.EMP_NIT, dbo.Documentos.CODDOC, dbo.Documentos.DOC_NUMERO, dbo.Documentos.DOC_NOMREF, dbo.Documentos.DOC_DIRENTREGA, dbo.Documentos.DOC_ESTATUS, dbo.Documentos.DOC_HORA, 
                         dbo.Docproductos.DOC_ITEM, dbo.Docproductos.CODPROD, dbo.Productos.DESPROD, dbo.Docproductos.CANTIDADINV, dbo.Docproductos.TOTALCOSTO, dbo.Docproductos.TOTALPRECIO, dbo.Docproductos.CANTIDADPED, 
                         dbo.Productos.CODCLAUNO, dbo.Claseuno.DESCLAUNO, dbo.Tipodocumentos.TIPODOC, dbo.Documentos.DOC_TOTALCOSTO, dbo.Documentos.DOC_TOTALVENTA, dbo.Documentos.DOC_FECHA, dbo.Documentos.USUARIO, 
                         dbo.Documentos.NITCLIE, dbo.Documentos.DOC_NIT, dbo.Documentos.DOC_NUMORDEN
FROM            dbo.Docproductos RIGHT OUTER JOIN
                         dbo.Documentos LEFT OUTER JOIN
                         dbo.Tipodocumentos ON dbo.Documentos.CODDOC = dbo.Tipodocumentos.CODDOC AND dbo.Documentos.EMP_NIT = dbo.Tipodocumentos.EMP_NIT ON dbo.Docproductos.DOC_NUMERO = dbo.Documentos.DOC_NUMERO AND
                          dbo.Docproductos.CODDOC = dbo.Documentos.CODDOC AND dbo.Docproductos.EMP_NIT = dbo.Documentos.EMP_NIT LEFT OUTER JOIN
                         dbo.Productos LEFT OUTER JOIN
                         dbo.Claseuno ON dbo.Productos.CODCLAUNO = dbo.Claseuno.CODCLAUNO AND dbo.Productos.EMP_NIT = dbo.Claseuno.EMP_NIT ON dbo.Docproductos.CODPROD = dbo.Productos.CODPROD AND 
                         dbo.Docproductos.EMP_NIT = dbo.Productos.EMP_NIT
WHERE        (dbo.Tipodocumentos.TIPODOC = 'PED')

GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[55] 4[9] 2[22] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = -96
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Docproductos"
            Begin Extent = 
               Top = 138
               Left = 308
               Bottom = 268
               Right = 527
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Documentos"
            Begin Extent = 
               Top = 88
               Left = 518
               Bottom = 328
               Right = 720
            End
            DisplayFlags = 280
            TopColumn = 116
         End
         Begin Table = "Tipodocumentos"
            Begin Extent = 
               Top = 227
               Left = 637
               Bottom = 357
               Right = 885
            End
            DisplayFlags = 280
            TopColumn = 6
         End
         Begin Table = "Productos"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 262
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Claseuno"
            Begin Extent = 
               Top = 6
               Left = 300
               Bottom = 136
               Right = 503
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 13' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'W_DESPACHO_PRODUCTOS'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'50
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'W_DESPACHO_PRODUCTOS'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'W_DESPACHO_PRODUCTOS'
GO


