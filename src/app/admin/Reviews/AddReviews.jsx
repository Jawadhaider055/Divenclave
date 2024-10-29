"use client";
import React, { useState, useEffect } from "react";
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Box,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import React Toastify CSS
import axios from "axios";

const AddReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [model, setModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    open: false,
    id: null,
  });

  const [formData, setFormData] = useState({
    id: "",
    reviewer_name: "",
    reviewer_title: "",
    review_content: "",
    review_rating: "",
  });

  const handleDelete = (row) => {
    if (row && row.id) {
      setDeleteConfirmation({ open: true, id: row.id });
    } else {
      toast.error("Invalid Review for deletion");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/review/${deleteConfirmation.id}`
      );

      if (response.status === 200) {
        const updatedReviews = reviews.filter(
          (review) => review.id !== deleteConfirmation.id
        );
        setReviews(updatedReviews);
        toast.success("Review successfully deleted!");
      } else {
        toast.error("Failed to delete review");
      }
    } catch (error) {
      toast.error("Error deleting review: " + error.message);
    } finally {
      setDeleteConfirmation({ open: false, id: null });
    }
  };

  const modelClose = () => {
    setModel(false);
    setFormData({
      id: "",
      reviewer_name: "",
      reviewer_title: "",
      review_content: "",
      review_rating: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (editingReview) {
      setEditingReview({
        ...editingReview,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    setModel(false);
    setLoading(true);

    // Basic validation with rating check
    if (
      !formData.reviewer_name ||
      !formData.reviewer_title ||
      !formData.review_content ||
      !formData.review_rating ||
      !(formData.review_rating >= 1 && formData.review_rating <= 5)
    ) {
      setLoad(false);
      setLoading(false);
      toast.error("Please fill in all the fields with valid data");
      return;
    }

    try {
      const reviewToSubmit = {
        reviewer_name: formData.reviewer_name,
        reviewer_title: formData.reviewer_title,
        review_content: formData.review_content,
        review_rating: parseInt(formData.review_rating, 10), // Ensure rating is an integer
      };

      const response = await axios.post(`/api/review`, reviewToSubmit);
      toast.success("Review has been added successfully!");
      setLoad(false);
      setLoading(false);
      modelClose();
      setReviews([...reviews, response.data]); // Add the new review to state
    } catch (error) {
      toast.error("Error occurred while sending data to the API");
      setLoad(false);
      setLoading(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoad(true);
    setLoading(true);

    // Validate for edit too
    if (
      !editingReview.reviewer_name ||
      !editingReview.reviewer_title ||
      !editingReview.review_content ||
      !editingReview.review_rating ||
      !(editingReview.review_rating >= 1 && editingReview.review_rating <= 5)
    ) {
      setLoad(false);
      setLoading(false);
      toast.error("Please fill in all the fields with valid data");
      return;
    }

    try {
      const reviewToUpdate = {
        reviewer_name: editingReview.reviewer_name,
        reviewer_title: editingReview.reviewer_title,
        review_content: editingReview.review_content,
        review_rating: parseInt(editingReview.review_rating, 10), // Ensure rating is an integer
      };

      const response = await axios.put(
        `/api/review/${editingReview.id}`,
        reviewToUpdate
      );

      toast.success("Review has been updated successfully!");
      setLoad(false);
      setLoading(false);
      handleClose();

      const updatedReviews = reviews.map((review) =>
        review.id === editingReview.id ? response.data : review
      );
      setReviews(updatedReviews);
    } catch (error) {
      toast.error("Error occurred while updating the data");
      setLoad(false);
      setLoading(false);
    }
  };

  const handleOpen = (review) => {
    setEditingReview(review);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingReview(null);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/review`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const reviewsData = await response.json();
        setReviews(reviewsData);
      } catch (error) {
        toast.error("Error fetching data: " + error.message);
      }
    };
    fetchReviews();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Reviewer Name",
        accessor: "reviewer_name",
      },
      {
        Header: "Title",
        accessor: "reviewer_title",
      },
      {
        Header: "Review",
        accessor: "review_content",
      },
      {
        Header: "Rating",
        accessor: "review_rating",
      },
      {
        Header: "Action",
        accessor: "updateButton",
        Cell: ({ row }) => (
          <div className="flex gap-6">
            <FaUserEdit
              onClick={() => handleOpen(row.original)}
              style={{
                fontSize: "26px",
                color: "#006a5c",
                paddingRight: "6px",
                cursor: "pointer",
              }}
            />
            <MdDeleteForever
              onClick={() => handleDelete(row.original)}
              style={{ fontSize: "26px", color: "#b03f37", cursor: "pointer" }}
            />
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data: reviews,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <Box sx={{ padding: 3 }}>
      <ToastContainer /> {/* Add the ToastContainer for notifications */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Toolbar>
          <TextField
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value || undefined)}
            placeholder="Search"
            variant="outlined"
            size="small"
          />
        </Toolbar>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModel(true)}
          sx={{
            backgroundColor: "#E3B505",
            color: "black",
            ":hover": {
              backgroundColor: "#d3a004",
            },
          }}
        >
          ADD New
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      borderBottom: "2px solid #E3B505",
                    }}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...otherRowProps } = row.getRowProps();
              return (
                <TableRow key={row.original.id} {...otherRowProps}>
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...otherCellProps } = cell.getCellProps();
                    return (
                      <TableCell key={cell.id} {...otherCellProps}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: reviews.length }]}
        colSpan={5}
        count={reviews.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        showLastButton
        showFirstButton
        onPageChange={(event, newPage) => gotoPage(newPage)}
        onRowsPerPageChange={(event) => setPageSize(Number(event.target.value))}
      />

      {/* Add Review Dialog */}
      <Dialog
        open={model}
        onClose={modelClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle>
          <Typography variant="h6">New Review</Typography>
          <IconButton
            aria-label="close"
            onClick={modelClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Reviewer Name"
                  type="text"
                  name="reviewer_name"
                  value={formData.reviewer_name}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="reviewer_title"
                  value={formData.reviewer_title}
                  fullWidth
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Review"
                  name="review_content"
                  value={formData.review_content}
                  fullWidth
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Rating"
                  name="review_rating"
                  type="number" // Ensure it's a number
                  value={formData.review_rating}
                  fullWidth
                  onChange={handleInputChange}
                  variant="outlined"
                  inputProps={{ min: 1, max: 5 }}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button
                type="submit"
                disabled={load}
                variant="contained"
                sx={{
                  backgroundColor: "#E3B505",
                  color: "black",
                  ":hover": {
                    backgroundColor: "#d3a004",
                  },
                }}
              >
                {`${load ? "Loading...." : "Save"}`}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Review Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle>
          <Typography variant="h6">Edit Review</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {editingReview && (
            <form onSubmit={handleEdit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Reviewer Name"
                    name="reviewer_name"
                    value={editingReview.reviewer_name}
                    fullWidth
                    onChange={(e) =>
                      setEditingReview({
                        ...editingReview,
                        reviewer_name: e.target.value,
                      })
                    }
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    name="reviewer_title"
                    value={editingReview.reviewer_title}
                    fullWidth
                    onChange={(e) =>
                      setEditingReview({
                        ...editingReview,
                        reviewer_title: e.target.value,
                      })
                    }
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Review"
                    name="review_content"
                    value={editingReview.review_content}
                    fullWidth
                    onChange={(e) =>
                      setEditingReview({
                        ...editingReview,
                        review_content: e.target.value,
                      })
                    }
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Rating"
                    name="review_rating"
                    type="number" // Ensure it's a number
                    value={editingReview.review_rating}
                    fullWidth
                    onChange={(e) =>
                      setEditingReview({
                        ...editingReview,
                        review_rating: e.target.value,
                      })
                    }
                    variant="outlined"
                    inputProps={{ min: 1, max: 5 }}
                  />
                </Grid>
              </Grid>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleEdit}
                  disabled={loading}
                  sx={{
                    backgroundColor: "#E3B505",
                    color: "black",
                    ":hover": {
                      backgroundColor: "#d3a004",
                    },
                    mt: 2,
                    width: "100%",
                  }}
                >
                  {`${loading ? "Loading...." : "Save"}`}
                </Button>
              </DialogActions>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmation.open}
        onClose={() => setDeleteConfirmation({ open: false, id: null })}
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-description"
      >
        <DialogTitle id="delete-confirmation-title">
          <Typography variant="h6" component="div">
            Confirm Deletion
          </Typography>
        </DialogTitle>
        <DialogContent>
          {deleteConfirmation.id && (
            <Typography variant="body1">
              Are you sure you want to delete the review with ID {deleteConfirmation.id}?
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmation({ open: false, id: null })} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {loading && (
        <Backdrop open={loading} sx={{ zIndex: 9999, color: "#fff" }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </Box>
  );
};

export default AddReviews;
