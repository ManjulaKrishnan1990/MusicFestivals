export class LoggingService{
    logStatusChange(status: string) {
        console.log("selected Recipe changed , New recipe is: " + status);
    }
}