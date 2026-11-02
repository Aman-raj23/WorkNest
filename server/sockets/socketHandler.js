export const setupSockets = (io) => {
  io.on('connection', (socket) => {
    console.log(`[Socket.io] Client connected: ${socket.id}`);

    // Join room for a specific project
    socket.on('project:join', (projectId) => {
      socket.join(`project:${projectId}`);
      console.log(`[Socket.io] ${socket.id} joined room project:${projectId}`);
    });

    // Leave project room
    socket.on('project:leave', (projectId) => {
      socket.leave(`project:${projectId}`);
    });

    // Broadcast task move / update to everyone in the project
    socket.on('task:move', (data) => {
      socket.to(`project:${data.projectId}`).emit('task:moved', data);
    });

    socket.on('task:create', (data) => {
      socket.to(`project:${data.projectId}`).emit('task:created', data);
    });

    // Broadcast new comment
    socket.on('comment:send', (data) => {
      socket.to(`project:${data.projectId}`).emit('comment:received', data);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket.io] Client disconnected: ${socket.id}`);
    });
  });
};
