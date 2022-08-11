import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
    let calculator: CalculatorService
    let logger: LoggerService
    beforeEach(() => {
        logger = jasmine.createSpyObj('LoggerService', ["log"])
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: logger}
            ]
        })
        calculator = TestBed.inject(CalculatorService)
    })
    it('should add two numbers', () => {
        const result = calculator.add(2, 2)
        expect(result).toBe(4)
        expect(logger.log).toHaveBeenCalledTimes(1)
    })
    it('should substract two numbers', () => {
        const result = calculator.subtract(2, 2)
        expect(result).toBe(0, "Unexpected substraction result")
        expect(logger.log).toHaveBeenCalledTimes(1)
    })
})