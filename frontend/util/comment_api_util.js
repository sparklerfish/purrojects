export const fetchComments = projectId => {
    $.ajax({
        method: "GET",
        url: `/api/projects/${projectId}`
    });
};

export const createComment = comment => {
    $.ajax({
        method: "POST",
        url: `/api/comments`,
        data: { comment }
    });
};

export const updateComment = comment => {
    $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: { comment }
    });
};

export const destroyComment = commentId => {
    $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    });
};