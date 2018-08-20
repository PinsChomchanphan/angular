import { OptimizationModule } from './optimization.module';

describe('OptimizationModule', () => {
  let optimizationModule: OptimizationModule;

  beforeEach(() => {
    optimizationModule = new OptimizationModule();
  });

  it('should create an instance', () => {
    expect(optimizationModule).toBeTruthy();
  });
});
