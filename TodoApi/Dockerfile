# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copy csproj and restore
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the code and build it
COPY . ./
RUN dotnet publish -c Release -o out

# Use the ASP.NET runtime image for the final container
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Expose port (same as used in appsettings.json or Program.cs)
EXPOSE 5000

# Start the app
ENTRYPOINT ["dotnet", "dotnet-crud.dll"]
