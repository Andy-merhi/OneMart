# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY backend/OneMart.API ./OneMart.API
WORKDIR /src/OneMart.API
RUN dotnet build -c Release -o /app/build

# Publish stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/build .
EXPOSE 7000 7001
ENTRYPOINT ["dotnet", "OneMart.API.dll"]
