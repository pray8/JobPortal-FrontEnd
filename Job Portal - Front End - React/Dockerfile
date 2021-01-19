FROM node

RUN mkdir /job_portal_front_end_react

# Copy all filesfrom current directory to docker.
COPY . /job_portal_front_end_react

WORKDIR /job_portal_front_end_react

ENV PATH /job_portal_front_end_react/node_modules/ .bin:$PATH

# Install and cache application dependencies.
RUN yarn

# Start Application.
CMD ["npm", "start"]